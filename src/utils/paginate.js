import _ from 'lodash';

export default function Paginate(items , PageNumer , PageSize)
{
    const StartIndex = (PageNumer - 1) * PageSize;
    return _(items).slice(StartIndex).take(PageSize).value();
} 

