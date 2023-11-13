export interface PaginationProps {
    count: number;
    onChange: (selectedItem: { selected: number; }) => void;
}