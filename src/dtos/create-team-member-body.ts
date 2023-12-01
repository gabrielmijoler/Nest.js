import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'Não pode ser nulo',
  })
  function: string;
}
