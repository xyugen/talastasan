import siteName from "@/data/site-name";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 text-secondary-foreground/90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-sm">
            Copyright &copy;{year}, {siteName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
