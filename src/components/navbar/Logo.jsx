import LogoRedGym from "@/assets/LogoRedGym.jpg";

function Logo() {
  return (
    <div className="flex items-center gap-2">

      <img
        src={LogoRedGym}
        alt="Logo"
        className="w-10 h-10 object-contain"
      />

      <span className="font-bold">
        RedGym
      </span>

    </div>
  );
}

export default Logo;