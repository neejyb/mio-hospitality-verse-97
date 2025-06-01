
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppCTA = () => {
  const phoneNumber = "2348123456789"; // Replace with actual business phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline-block font-medium whitespace-nowrap group-hover:block">
        Chat with Us
      </span>
    </motion.a>
  );
};

export default WhatsAppCTA;
