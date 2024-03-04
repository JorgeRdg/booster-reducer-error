import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class CommandTriggeredEvent {
  public constructor(
    readonly dummyId: UUID,
  ) {}

  public entityID(): UUID {
    return this.dummyId;
  }
}
