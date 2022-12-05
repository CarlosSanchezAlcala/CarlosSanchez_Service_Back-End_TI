import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsNotEmpty({message: "El usuario es obligatorio."})
  dniUsuario: string;

  @IsNotEmpty({message: "La contraseña es obligatoria."})
  claveUsuario: string;
}