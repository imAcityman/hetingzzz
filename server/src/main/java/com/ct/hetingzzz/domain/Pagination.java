package com.ct.hetingzzz.domain;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public class Pagination {

    private int pageSize = 10;
    private int page = 1;

    public Pagination() {
    }

    public Pagination(int page, int pageSize) {
        this.pageSize = pageSize;
        this.page = page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public Pageable toPage() {
        return PageRequest.of(this.page - 1, this.pageSize);
    }
}
