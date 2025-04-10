import "./globals.css";
			export const metadata = {
				title: "Atividade NextJs",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}
