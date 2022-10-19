import { useListContext } from 'react-admin';
import { Button, Toolbar } from '@mui/material';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

const Pagination = () => {
    const { data, page, hasPreviousPage, hasNextPage, setPage, total } = useListContext();
    console.log(page, hasPreviousPage, hasNextPage, setPage, data, total)
    if (!hasPreviousPage && !hasNextPage) return null;
    return (
        <Toolbar>
            {hasPreviousPage &&
                <Button 
                    key="previous"
                    onClick={() => setPage(page - 1)}
                    startIcon={<ChevronLeft />}
                >
                    Previous
                </Button>
            }
            {hasNextPage &&
                <Button 
                    key="next"
                    onClick={() => setPage(page + 1)}
                    startIcon={<ChevronRight />}
                >
                    Next                    
                </Button>
            }
        </Toolbar>
    );
}

export default Pagination