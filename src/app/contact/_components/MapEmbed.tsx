export default function MapEmbed() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125950.08163992382!2d-0.9396812241422411!3d9.426659626126394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43c903162fdeb%3A0x83f46c1562717cde!2sTamale!5e0!3m2!1sen!2sgh!4v1734907896504!5m2!1sen!2sgh"
      className="w-full h-[600px] aspect-square"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
