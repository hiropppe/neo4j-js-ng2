import { Node, NodeInterface }  from '../model';
import { escape, quote }        from '../utils';

export class LabelQuery
{
    queryString: string;

    constructor(string: string)
    {
        string = string.trim()

        // "Python 10,0"
        let label: string = ''
        let limit: number = null;
        let skip: number = null;
        
        const limitSkipMatch = new RegExp(/([0-9,\s]+)$/i);

        const skipLimitMatch = string.match(limitSkipMatch);
        if (skipLimitMatch) {
            const parts = skipLimitMatch[0].split(',').map(v => { return v.trim() });

            if (parts.length === 2) {
                limit = parseInt(parts[0])
                skip = parseInt(parts[1])
            } else if (parts.length === 1) {
                limit = parseInt(parts[0])
                skip = null
            }

            label = string.substring(0, skipLimitMatch.index)
        } else {
            label = string
        }

        let queryString = `MATCH (a:Entity) WHERE a.label='${label}' RETURN a, ID(a), LABELS(a)`;

        if (null !== skip) {
            queryString += ` SKIP ${skip}`;
        }
        if (null !== limit) {
            queryString += ` LIMIT ${limit}`;
        }

        this.queryString = queryString;
    }

    getQuery()
    {
        return this.queryString;
    }
}
