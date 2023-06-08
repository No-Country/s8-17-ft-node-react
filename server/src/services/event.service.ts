import Repository from "../utils/repository";
import UserModel, { User } from "../models/user.model";
import { EventCalendarDto } from "../dto/calendar/eventCalendar.dto";

export class EventService {
  private readonly userRepository: Repository<User> = new Repository(UserModel);

  public async addRecipe(user:User, recipe:any, addEventDto:EventCalendarDto){
    const {
      moment,
      dayOfWeek
    } = addEventDto;
    user.weekCalendar[dayOfWeek][moment] = {
      name: recipe.name,
      id: recipe.id
    };

    return await this.userRepository.update({
      id: user.id,
    },{
      $set:{weekCalendar: user.weekCalendar}
    });
  }

  public async deleteRecipe(user:User, deleteEventDto:EventCalendarDto){
    const {
      moment,
      dayOfWeek
    } = deleteEventDto;
    user.weekCalendar[dayOfWeek][moment] = null;
    

    return await this.userRepository.update({
      id: user.id,
    },{
      $set:{weekCalendar: user.weekCalendar}
    });
  }
}