import { IsString, IsOptional, IsEnum, IsDate, IsInt, Min } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    description: string;

    @IsDate()
    dueDate: Date;

    @IsEnum(['pending', 'completed'])
    status: string;

    @IsInt()
    @Min(0)
    isDeleted: number;
}

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDate()
    dueDate?: Date;

    @IsOptional()
    @IsEnum(['pending', 'completed'])
    status?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    isDeleted?: number;
}
