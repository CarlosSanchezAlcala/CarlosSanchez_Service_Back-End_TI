import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { LoginDto } from "../dtos/login.dto";

@Controller("/auth")
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post("/login")
  async login(@Body() login: LoginDto) {
    return this.authService.findByUser(login.dniUsuario, login.claveUsuario)
  }

}