// Arquivo: src/Rodape.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Rodape() {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <FaGithub size={30} color="#333" />
      <FaLinkedin size={30} color="#0077b5" />
      <MdEmail size={30} color="#d44638" />
    </div>
  );
}