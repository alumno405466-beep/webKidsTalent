export function GoogleMap() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-soft border border-slate-200">
      <iframe
        title="Ubicación Kids Talent - Toledo, España"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.7489474649726!2d-4.0327689!3d39.8821361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0af7b8c0924b%3A0xb544b0c0c15c70fe!2sKids%20Talent!5e0!3m2!1ses!2ses!4v1712880000000"
      />
    </div>
  )
}
