import "./globals.css";

			export const metadata = {
				title: "Atividade Next.js",
				description: "Correção da primeira atividade de Next.js",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>
							{children}
							</body>
					</html>
);
		}