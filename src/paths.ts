import 'module-alias/register'
import { addAliases } from 'module-alias'

addAliases({
  '@': `${__dirname}`,
  '@db': `${__dirname}/database`,
  '@/utils': `${__dirname}/utils`
})
