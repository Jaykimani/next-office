import { sendTelegramMessage } from '@/lib/telegram'

export async function GET() {
  try {
    await sendTelegramMessage(
      '🛒 OfficeFlow Telegram test\n\nYour Next.js application is successfully connected to Telegram. ✅',
    )

    return Response.json({
      success: true,
      message: 'Telegram notification sent successfully.',
    })
  } catch (error) {
    console.error('Telegram notification failed:', error)

    return Response.json(
      {
        success: false,
        error: 'Telegram notification failed.',
      },
      { status: 500 },
    )
  }
}