import { internalIpV4Sync } from 'internal-ip'

export default function getIpAdress() {
  return internalIpV4Sync()
}
