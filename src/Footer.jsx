import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-3 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center space-x-4">
          {/* Facebook Icon */}
          <a href="https://www.facebook.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm1.917 5.672l-.3 1.632h-1.425c-1.265 0-1.531.601-1.531 1.502v2.008h2.929l-.3 1.632h-2.629v6.392h-1.662v-6.392h-1.57v-1.632h1.57v-1.208c0-2.037 1.22-3.182 3.156-3.182.918 0 1.811.068 2.103.098z"/>
            </svg>
          </a>
          {/* Twitter Icon */}
          <a href="https://www.twitter.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.444 4.836c-.866.385-1.792.644-2.76.761a4.878 4.878 0 002.15-2.69c-.908.538-1.911.928-2.978 1.136a4.916 4.916 0 00-8.351 4.482c-4.08-.205-7.69-2.158-10.107-5.134-.422.724-.663 1.562-.663 2.459 0 1.698.86 3.191 2.161 4.066-.799-.025-1.552-.242-2.212-.61v.061c0 2.373 1.687 4.355 3.93 4.796-.411.111-.846.171-1.29.171-.315 0-.623-.031-.926-.089.624 1.933 2.434 3.343 4.586 3.38a9.88 9.88 0 01-6.133 2.118c-.399 0-.787-.022-1.17-.067 2.181 1.398 4.772 2.214 7.547 2.214 9.057 0 14.021-7.498 14.021-13.986 0-.212 0-.425-.014-.637a9.935 9.935 0 002.44-2.474z"/>
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="https://www.instagram.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.16c3.2 0 3.57 0 4.832.07 1.195.07 1.87.28 2.31.47a4.693 4.693 0 011.68 1.68c.19.44.4 1.11.47 2.31.07 1.26.07 1.63.07 4.832 0 3.2 0 3.57-.07 4.832-.07 1.195-.28 1.87-.47 2.31a4.693 4.693 0 01-1.68 1.68c-.44.19-1.11.4-2.31.47-1.26.07-1.63.07-4.832.07s-3.57 0-4.832-.07c-1.195-.07-1.87-.28-2.31-.47a4.693 4.693 0 01-1.68-1.68c-.19-.44-.4-1.11-.47-2.31-.07-1.26-.07-1.63-.07-4.832 0-3.2 0-3.57.07-4.832.07-1.26.28-1.87.47-2.31a4.693 4.693 0 011.68-1.68c.44-.19 1.11-.4 2.31-.47 1.26-.07 1.63-.07 4.832-.07zm0 1.5c-3.085 0-3.464 0-4.672.07-1.118.07-1.682.3-2.075.57-.58.35-.96.82-1.18 1.4-.2.44-.34.96-.4 1.5-.07 1.21-.07 1.59-.07 4.75s0 3.53.07 4.75c.06.54.2 1.06.4 1.5.22.58.6 1.05 1.18 1.4.39.27.94.5 2.075.57 1.21.07 1.59.07 4.672.07s3.464 0 4.672-.07c1.118-.07 1.682-.3 2.075-.57.58-.35.96-.82 1.18-1.4.2-.44.34-.96.4-1.5.07-1.21.07-1.59.07-4.75s0-3.53-.07-4.75c-.06-.54-.2-1.06-.4-1.5-.22-.58-.6-1.05-1.18-1.4-.39-.27-.94-.5-2.075-.57-1.21-.07-1.59-.07-4.672-.07zm3.36 2.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
            </svg>
          </a>
          {/* LinkedIn Icon */}
<a href="https://www.linkedin.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100 transition duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.225 0h-20.45c-.787 0-1.425.638-1.425 1.425v21.15c0 .787.638 1.425 1.425 1.425h20.45c.787 0 1.425-.638 1.425-1.425v-21.15c0-.787-.638-1.425-1.425-1.425zm-14.347 19.485h-3.74v-10h3.74v10zm-1.87-11.453c-1.225 0-2.215-.987-2.215-2.205s.99-2.205 2.215-2.205c1.228 0 2.215.987 2.215 2.205s-.987 2.205-2.215 2.205zm12.748 11.453h-3.74v-5.605c0-1.365-.49-2.299-1.715-2.299-1.124 0-1.765.76-1.765 1.836v6.068h-3.74v-10h3.74v1.365c1.034-1.526 3.13-1.134 3.13 1.314v7.365z"/>
  </svg>
</a>

        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <img src="./original-logo.png" alt="Logo" className="w-10 h-10"/>
              <p className="text-xl font-bold">Resale online | salesinbd.com</p> 
            </div>
            <p>🔥 Resale and Earn what you want............................. 🚀 </p>
          </div>
          <div className="hidden lg:block">
            <h6 className="mb-1 flex justify-center font-semibold uppercase md:justify-start">⤴ Products</h6>
            <p className="mb-1">
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🔥 Best Offers</a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🔥 Trending Items</a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🔥 Free Shipping</a>
            </p>
            <p>
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🔥 Buy One Get One</a>
            </p>
          </div>
          <div className="hidden lg:block">
            <h6 className="mb-1 flex justify-center font-semibold uppercase md:justify-start">Useful Links</h6>
            <p className="mb-1">
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🚀 Home</a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🚀 About Us</a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🚀 About Store</a>
            </p>
            <p>
              <a href="#" className="text-neutral-600 dark:text-neutral-200">🏥 Help</a>
            </p>
          </div>
          <div className="hidden lg:block">
            <h6 className="mb-1 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <p className="mb-1 flex items-center justify-center md:justify-start">
              🏠 Unique, Baipail, Ashulia, Savar, Dhaka-1349
            </p>
            <p className="mb-1 flex items-center justify-center md:justify-start">
              📧 salesinbd@gmail.com
            </p>
            <p className="mb-1 flex items-center justify-center md:justify-start">
              📞 +880 1713 713 620
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-2 bg-neutral-500 dark:bg-neutral-500 text-white">
        © 2025 Resale online | salesinbd.com
      </div>
    </footer>
  );
}
