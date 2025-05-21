
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
        className="flex flex-col items-center p-5 cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-full overflow-hidden">
          <Avatar className="w-full h-full">
            <AvatarImage src={image} alt={name} className="object-cover"/>
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="font-bold text-lg text-center">{name}</h3>
        <p className="text-gray-600 text-center">{role}</p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-2">{name}</DialogTitle>
            <DialogDescription className="text-mio-orange font-medium">{role}</DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-gray-700 mb-6 whitespace-pre-line">{bio}</p>
              
              {socialLinks && (
                <div className="flex space-x-4">
                  {socialLinks.instagram && (
                    <a 
                      href={socialLinks.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-mio-orange transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                  )}
                  {socialLinks.facebook && (
                    <a 
                      href={socialLinks.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-mio-orange transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a 
                      href={socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-mio-orange transition-colors"
                    >
                      <Linkedin size={24} />
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
