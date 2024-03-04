import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { CommandTriggeredEvent } from '../events/command-triggered-event'

@Entity({
  authorizeReadEvents: 'all',
})
export class DummyEntity {
  public constructor(
    public id: UUID,
  ) {}

  @Reduces(CommandTriggeredEvent)
  public static reduceCommandTriggeredEvent(event: CommandTriggeredEvent, currentDummyEntity?: DummyEntity): DummyEntity {
    console.log("THIS WILL NOT BE READ IN AZURE, BUT WILL IN LOCAL PROVIDER.");
    return new DummyEntity(event.dummyId);
  }
}
