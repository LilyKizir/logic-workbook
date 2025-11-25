import TabsExample from "./Tabs.Jsx";
const Header = () => {
    return (
        <>
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-between pb-3 mb-5 border-bottom">
                <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
                    <span class="fs-4">Symbolic Logic Workbook</span>
                </a>
                
                {/* IF SIGNED IN THEN LOG OUT BTN */}
                <div class="col-md-3 text-end">
                    Welcome User!
                    <button type="button" class="btn btn-outline-primary ms-2">
                        Sign Out
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;