
  import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <div>
       <footer className="bg-black text-white fixed z-50 bottom-0 w-full p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div>
      <h3 className="text-lg font-bold">Nia Alvarado</h3>
      <p>© {new Date().getFullYear()} Nia. All rights reserved.</p>
    </div>
    <div>
      <a href="" target="_blank" rel="noopener noreferrer" className="mr-4">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/nia-alvarado-603082155/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
    </div>
  </div>
</footer>
      </div>
    )
  }
  