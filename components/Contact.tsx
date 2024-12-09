'use client';

const ContactSection = () => {
  return (
    <section id="contact" className="py-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact</h2>

      <div className="flex flex-col items-center space-y-4">
        <a
          href="tel:+237696210939"
          className="text-lg text-blue-600 hover:underline"
        >
          +237 696-210-939
        </a>
        <a
          href="mailto:fotiodev1@gmail.com"
          className="text-lg text-blue-600 hover:underline"
        >
          fotiodev1@gmail.com
        </a>
        <a
          href="https://twitter.com/dilane_ft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 inline-block"
            fill="currentColor"
          >
            <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/ft.dylan24?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 inline-block"
            fill="currentColor"
          >
            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915Z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
