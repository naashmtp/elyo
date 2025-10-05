import { NextRequest, NextResponse } from 'next/server';

const CONTACT_EMAIL = 'services.elyo@gmail.com';

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

    // Construction de l'email
    const emailContent = `
Nouvelle demande de contact depuis le site ELYÔ Conciergerie

Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Type de service: ${serviceType}

Message:
${message}

---
Envoyé depuis le formulaire de contact elyoservices.fr
`;

    // Pour l'instant, on log juste (à remplacer par un vrai service d'envoi)
    console.log('Email à envoyer à:', CONTACT_EMAIL);
    console.log(emailContent);

    // TODO: Intégrer un service d'envoi d'email (Resend, SendGrid, etc.)

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}
