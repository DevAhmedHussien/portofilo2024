export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ALEX</h3>
            <p className="text-gray-400">
              UI/UX Designer & Full Stack Developer creating modern and responsive web applications
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#works" className="text-gray-400 hover:text-white">Works</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@alex.com</li>
              <li>+1 (234) 567-890</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div> */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Syed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}