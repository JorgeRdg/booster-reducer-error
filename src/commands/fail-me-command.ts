import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { CommandTriggeredEvent } from '../events/command-triggered-event'

@Command({
  authorize: 'all' // Specify authorized roles here. Use 'all' to authorize anyone
})
export class FailMeCommand {
  public constructor(
  ) { }

  public static async handle(command: FailMeCommand, register: Register): Promise<UUID> {
    const newId = UUID.generate()
    register.events(new CommandTriggeredEvent(newId))

    return newId
  }
}
