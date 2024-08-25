type Props = {
  fill?: string;
};

export const ArrowIcon: React.FC<Props> = ({ fill = '#4A4D58' }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4714 3.52864C10.211 3.26829 9.7889 
  3.26829 9.52855 3.52864L5.52855 7.52864C5.26821 7.78899 5.26821 8.2111 5.52855 8.47145L9.52855 12.4714C9.7889 12.7318 10.211 12.7318 10.4714 12.4714C10.7317 12.2111 10.7317 11.789 10.4714 11.5286L6.94277 8.00004L10.4714 4.47145C10.7317 4.2111 10.7317 3.78899 10.4714 3.52864Z"
      />
    </svg>
  );
};
