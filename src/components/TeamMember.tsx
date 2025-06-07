
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const TeamMember = ({ name, role, image, bio, socialLinks }: TeamMemberProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <>
      <div 
        className="flex flex-col items-center p-2 sm:p-3 md:p-5 cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 mb-2 sm:mb-3 md:mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-full overflow-hidden">
          <Avatar className="w-full h-full">
            <AvatarImage src={image} alt={name} className="object-cover"/>
            <AvatarFallback className="text-xs sm:text-sm md:text-lg">{initials}</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="font-bold text-xs sm:text-sm md:text-lg text-center line-clamp-2">{name}</h3>
        <p className="text-gray-600 text-center text-xs sm:text-sm line-clamp-1">{role}</p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="mobile-team-modal">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{name}</DialogTitle>
            <DialogDescription className="text-mio-orange font-medium text-sm sm:text-base">{role}</DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-4">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-gray-100 shadow-lg">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-gray-700 mb-4 sm:mb-6 whitespace-pre-line text-xs sm:text-sm md:text-base">{bio}</p>
              
              {socialLinks && (
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.instagram && (
                    <a 
                      href={socialLinks.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-mio-orange transition-colors"
                    >
                      <Instagram size={18} className="sm:w-6 sm:h-6" />
                    </a>
                  )}
                  {socialLinks.facebook && (
                    <a 
                      href={socialLinks.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-mio-orange transition-colors"
                    >
                      <Facebook size={18} className="sm:w-6 sm:h-6" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a 
                      href={socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-mio-orange transition-colors"
                    >
                      <Linkedin size={18} className="sm:w-6 sm:h-6" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamMember;
