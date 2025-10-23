const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xl font-semibold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-transparent bg-clip-text mb-4 block  damion-regular">Captura</span>
            <p className="text-gray-500 text-sm">
              Making weddings more interactive and memorable. Custom-built for weddings — not just another photo app.
            </p>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Captura. All rights reserved.</p>
              <p>Made with ❤️ for <strong className="italic">all events</strong></p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
