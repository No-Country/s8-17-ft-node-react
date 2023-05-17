import { IsEmail, IsString } from "class-validator";

export class GoogleAuthDto {
    @IsString({
        message: "Invalid id"
    })
    id: string;

    @IsString({
        message: "Invalid name"
    })
    name: string;

    @IsString({
        message: "Invalid email"
    })
    @IsEmail({
        allow_display_name: true,
        ignore_max_length: true
    })
    email: string;

    @IsString({
        message: "Invalid image"
    })  
    image: string;

    @IsString({
        message: "Invalid accessToken"
    })
    accessToken: string;

    @IsString({
        message: "Invalid refreshToken"
    })
    refreshToken: string;
}