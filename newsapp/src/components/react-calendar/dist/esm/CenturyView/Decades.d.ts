/// <reference types="react" />
import TileGroup from '../TileGroup.js';
import Decade from './Decade.js';
type DecadesProps = {
    /**
     * The beginning of a period that shall be displayed.
     *
     * @example new Date(2017, 0, 1)
     */
    activeStartDate: Date;
    /**
     * Whether decades from next century shall be rendered to fill the entire last row in.
     *
     * @default false
     * @example true
     */
    showNeighboringCentury?: boolean;
} & Omit<React.ComponentProps<typeof TileGroup>, 'dateTransform' | 'dateType' | 'end' | 'renderTile' | 'start'> & Omit<React.ComponentProps<typeof Decade>, 'classes' | 'currentCentury' | 'date'>;
export default function Decades(props: DecadesProps): JSX.Element;
export {};
