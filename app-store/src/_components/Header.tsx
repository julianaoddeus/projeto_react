import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ShoppingCart,
  User,
  LogOut,
  Menu,
  X,
  StoreIcon,
} from "lucide-react";
import { toast } from "react-toastify";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthenticated = true;
  const username = "Juliana";

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-500 flex d-flex items-center gap-1"
          >
            <StoreIcon color="pink" />
            React Store
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground  hover:text-pink-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-pink-500 transition-colors"
            >
              Produtos
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/cart"
                  className="relative p-2 text-foreground hover:text-primary transition-colors"
                >
                  <ShoppingCart className="w-6 h-6" color="red"/>

                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"></span>
                </Link>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-secondary">
                    <strong>{username}</strong>
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-destructive hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" color="pink"/>
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors"
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-pink-500 transition-colors"
                >
                  Cadastrar
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-foreground  hover:text-pink-500 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-foreground  hover:text-pink-500 rounded-lg"
              >
                Produtos
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-foreground hover:bg-muted rounded-lg flex items-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" color="red"/>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-destructive hover:bg-red-50 rounded-lg text-left flex items-center gap-2"
                  >
                    <LogOut className="w-5 h-5" color="pink" />
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-primary hover:bg-pink-50 rounded-lg"
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg text-center"
                  >
                    Cadastrar
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
