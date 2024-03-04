import { Projects, ReadModel } from '@boostercloud/framework-core'
import { ProjectionResult, UUID } from '@boostercloud/framework-types'
import { DummyEntity } from '../entities/dummy-entity'

@ReadModel({
  authorize: 'all'// Specify authorized roles here. Use 'all' to authorize anyone
})
export class Dummy {
  public constructor(
    public id: UUID,
  ) {}

  @Projects(DummyEntity, 'id')
  public static projectDummyEntity(entity: DummyEntity, currentDummy?: Dummy): ProjectionResult<Dummy> {
    return new Dummy(entity.id);
  }
}
