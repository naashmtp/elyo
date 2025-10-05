import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_EMAIL = 'elyoconciergerie@outlook.fr';
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, message } = body;

    // Validation
    if (!name || !email || !phone || !serviceType || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Si la clé API Resend n'est pas configurée, on log juste
    if (!resend) {
      console.log('⚠️  RESEND_API_KEY non configurée - Email non envoyé');
      console.log('Données du formulaire:', { name, email, phone, serviceType, message });

      return NextResponse.json({
        success: true,
        message: 'Votre message a été enregistré (mode développement)',
      });
    }

    // Envoi de l'email via Resend
    await resend.emails.send({
      from: 'ELYÔ Conciergerie <onboarding@resend.dev>', // À remplacer par votre domaine vérifié
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande de contact - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">Nouvelle demande de contact</h2>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Type de service:</strong> ${serviceType}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-radius: 8px;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 12px;">
            Envoyé depuis le formulaire de contact sur elyoservices.fr
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
