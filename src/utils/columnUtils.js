import React from 'react'

export const AccountDividerUtils = {
    divide: function divideColumn(baseElements, elementAsProp) {
        const perRow = []
        let start = 0, end = 2;
        while (start < end) {
            const eachRow = baseElements.slice(start, end);
            perRow.push(<div className="tile is-ancestor columns">
                    {eachRow.map((baseElement, id) => {
                        const elem = elementAsProp;
                        const withProps = Object.assign({}, baseElement)
                        return withProps
                    })}
                </div>
            )
            start = end;
            end = end + 2 >= baseElements.length ? baseElements.length : end + 2;
        }
        return perRow;
    },

    divideWithObject: function (reactElement, baseElement) {

    }
}