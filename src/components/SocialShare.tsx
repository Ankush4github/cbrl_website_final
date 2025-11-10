'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  hashtags?: string[];
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Clinical Biomarkers Research Laboratory | IIT Kharagpur',
  description = 'Discover cutting-edge biomarker research and clinical diagnostics at CBRL. We bridge laboratory innovations with patient care through advanced translational medicine.',
  hashtags = ['biomarkers', 'research', 'healthcare', 'IITKharagpur', 'CBRL'],
  className = ''
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.map(tag => `#${tag}`).join(' ');
  const encodedHashtags = encodeURIComponent(hashtagString);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtags.join(',')}&via=CBRL_IITKgp`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(
      shareUrl,
      'share-dialog',
      'width=600,height=400,resizable=yes,scrollbars=yes'
    );
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* Facebook */}
      <button
        onClick={() => openShareWindow(shareLinks.facebook)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Share on Facebook"
      >
        <FaFacebook className="w-4 h-4" />
        <span className="hidden sm:inline">Facebook</span>
      </button>

      {/* Twitter */}
      <button
        onClick={() => openShareWindow(shareLinks.twitter)}
        className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Share on Twitter"
      >
        <FaTwitter className="w-4 h-4" />
        <span className="hidden sm:inline">Twitter</span>
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => openShareWindow(shareLinks.linkedin)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin className="w-4 h-4" />
        <span className="hidden sm:inline">LinkedIn</span>
      </button>

      {/* WhatsApp */}
      <button
        onClick={() => openShareWindow(shareLinks.whatsapp)}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>

      {/* Email */}
      <button
        onClick={() => window.location.href = shareLinks.email}
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Share via Email"
      >
        <FaEnvelope className="w-4 h-4" />
        <span className="hidden sm:inline">Email</span>
      </button>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Copy link"
      >
        <FaLink className="w-4 h-4" />
        <span className="hidden sm:inline">Copy</span>
      </button>
    </div>
  );
};

export default SocialShare;