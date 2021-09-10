import { Created } from '../generated/YieldToken/YieldToken'
import { Raise } from '../generated/schema'

//export function handleNewGravatar(event: NewGravatar): void {
//  let gravatar = new Gravatar(event.params.id.toHex())
//  gravatar.owner = event.params.owner
//  gravatar.displayName = event.params.displayName
//  gravatar.imageUrl = event.params.imageUrl
//  gravatar.save()
//}
//
//export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//  let id = event.params.id.toHex()
//  let gravatar = Gravatar.load(id)
//  if (gravatar == null) {
//    gravatar = new Gravatar(id)
//  }
//  gravatar.owner = event.params.owner
//  gravatar.displayName = event.params.displayName
//  gravatar.imageUrl = event.params.imageUrl
//  gravatar.save()
//}

export function handleCreated(event: Created): void {
    let raise = new Raise(event.params.id.toHex())
    raise.tokenURI = event.params.tokenURI
    raise.percentage = event.params._percentage
    raise.minToRaise = event.params._minToRaise
    raise.bidStart = event.params._bidStart
    raise.bidEnd = event.params._bidEnd
    raise.paymentsStart = event.params._paymentsStart
    raise.paymentsEnd = event.params._paymentsEnd
    raise.paymentsInterval = event.params._paymentsInterval
    raise.save()
}
