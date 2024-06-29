# BuildFormAI

BuildFormAI is a powerful SASS product that allows users to create specific forms in seconds using generative AI. Whether you need a contact form, survey, registration form, or any other type of form, BuildFormAI simplifies the process with the latest AI technology.

## Features

- **Generative AI Form Creation**: Instantly generate tailored forms with the help of advanced AI.
- **User-Friendly Interface**: Easy-to-use interface for quick form creation and customization.
- **Real-time Form Preview**: See changes to your forms in real-time as you build them.
- **Export Options**: Export your forms in various formats.

## Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/)
- **ORM**: [DrizzleORM](https://drizzle-orm.dev/)
- **Database**: [NeonDB](https://neon.tech/)
- **AI**: [Google Gemini](https://ai.google/)

## Deployed Project

Check out the deployed project here: [BuildFormAI](https://buildformsai.vercel.app/)

## Libraries Used

- **[lucide](https://lucide.dev/)**: Icon library for consistent and visually appealing icons.
- **[xlsx](https://github.com/SheetJS/sheetjs)**: Library for reading, manipulating, and writing spreadsheet data.
- **[moment](https://momentjs.com/)**: Parse, validate, manipulate, and display dates and times.
- **[shadcn](https://shadcn.dev/)**: Comprehensive UI components for building modern web apps.
- **[tailwindcss](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[daisyUI](https://daisyui.com/)**: Tailwind CSS components for building beautiful interfaces.

## Installation

To run BuildFormAI locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/zeul22/buildformai.git
    cd buildformai
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env.local` file in the root directory and add the necessary environment variables:
    ```env

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=

    NEXT_PUBLIC_DB_URL=
    NEXT_PUBLIC_GEMINI_API_KEY=

    NEXT_PUBLIC_BASE_URL=
    
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Create a new form**: Use the intuitive UI to generate forms quickly.
2. **Customize the form**: Adjust fields, styles, and settings as needed.
3. **Preview in real-time**: See a live preview of your form as you build.
4. **Export the form**: Export your form in your desired format.

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to learn how you can help.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, please reach out to [ananrahul033@gmail.com](mailto:ananrahul033@gmail.com).
