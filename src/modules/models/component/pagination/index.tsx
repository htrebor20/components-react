import Button from '../../../../components/button';
import { useGetcharacterRick } from '../../../../services/models';
import useFilterStore from '../../../../stores/store';
import './pagination.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight   } from '@fortawesome/free-solid-svg-icons';

function Pagination() {
  const { page, setPage } = useFilterStore();
  const { data } = useGetcharacterRick();

  const totalPages = data?.info?.pages || 1;

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  if (!data) return null;

  return (
    <div className="wraper-pagination">
      <div>{`${page * 20} de elementos ${data.info.count}`}</div>
      <div className="pagination">
        <span>{page}</span>
        <Button onClick={handlePrevious}  icon={{start:faChevronLeft }} size='s' isDisabled={page === 1} />
        <Button onClick={handleNext}  icon={{start:faChevronRight }} buttonStyle='secondary' size='s' isDisabled={page === totalPages} />
      </div>
    </div>
  );
}

export default Pagination;
