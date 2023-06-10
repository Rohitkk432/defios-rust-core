/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category AddChildObjective
 * @category generated
 */
export const addChildObjectiveStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'AddChildObjectiveInstructionArgs'
)
/**
 * Accounts required by the _addChildObjective_ instruction
 *
 * @property [_writable_, **signer**] childObjectiveAdder
 * @property [_writable_] roadmapMetadataAccount (optional)
 * @property [_writable_] parentObjectiveAccount (optional)
 * @category Instructions
 * @category AddChildObjective
 * @category generated
 */
export type AddChildObjectiveInstructionAccounts = {
  childObjectiveAdder: web3.PublicKey
  roadmapMetadataAccount?: web3.PublicKey
  parentObjectiveAccount?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const addChildObjectiveInstructionDiscriminator = [
  106, 193, 154, 161, 157, 17, 151, 104,
]

/**
 * Creates a _AddChildObjective_ instruction.
 *
 * Optional accounts that are not provided will be omitted from the accounts
 * array passed with the instruction.
 * An optional account that is set cannot follow an optional account that is unset.
 * Otherwise an Error is raised.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category AddChildObjective
 * @category generated
 */
export function createAddChildObjectiveInstruction(
  accounts: AddChildObjectiveInstructionAccounts,
  programId = new web3.PublicKey('7aDYtX4L9sRykPoo5mGAoKfDgjVMcWoo3D6B5AiUa99F')
) {
  const [data] = addChildObjectiveStruct.serialize({
    instructionDiscriminator: addChildObjectiveInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.childObjectiveAdder,
      isWritable: true,
      isSigner: true,
    },
  ]

  if (accounts.roadmapMetadataAccount != null) {
    keys.push({
      pubkey: accounts.roadmapMetadataAccount,
      isWritable: true,
      isSigner: false,
    })
  }
  if (accounts.parentObjectiveAccount != null) {
    if (accounts.roadmapMetadataAccount == null) {
      throw new Error(
        "When providing 'parentObjectiveAccount' then 'accounts.roadmapMetadataAccount' need(s) to be provided as well."
      )
    }
    keys.push({
      pubkey: accounts.parentObjectiveAccount,
      isWritable: true,
      isSigner: false,
    })
  }
  keys.push({
    pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
    isWritable: false,
    isSigner: false,
  })

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
