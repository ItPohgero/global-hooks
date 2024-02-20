import React, { Fragment } from 'react';
import useSpeeder from '../../core/use/useSpeeder';

interface Props {
    sparator: any | React.ReactNode;
}
export const UseSpeederPage: React.FC<Props> = (props: Props) => {
    const { speeder } = useSpeeder({ sparator: props?.sparator })
    return (
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                {speeder}
            </div>
        </Fragment>
    );
};
