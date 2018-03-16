<template>
    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">SB Admin v2.0</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span class="pull-right text-muted">40% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                            <span class="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span class="pull-right text-muted">20% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                            <span class="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Tasks</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-tasks -->
                </li>
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Charts<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="tables.html"><i class="fa fa-table fa-fw"></i> Tables</a>
                        </li>
                        <li>
                            <a href="forms.html"><i class="fa fa-edit fa-fw"></i> Forms</a>
                        </li>

                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Template data</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
                      <!-- /.row -->
            <div class="row">
              <div class="col-lg-2">
                <input type="text" class="form-control"  placeholder="Order code..." v-model="params.order_code" v-on:keyup.enter="handleSearchingForm">
              </div>
              <div class="col-lg-2">
                <input type="text" class="form-control" placeholder="Delivery code..." v-model="params.code" v-on:keyup.enter="handleSearchingForm">
              </div>
              <div class="col-lg-2">
                <input type="text" class="form-control" placeholder="Buyer name..." v-model="params.buyer_name" v-on:keyup.enter="handleSearchingForm">
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="text-left">
                  <button class="btn btn-primary"  style="width:70px" v-on:click="handleSearchingForm">
                      <i class="fa fa-search"></i>
                  </button>
                  <button class="btn btn-default" v-on:click="resetSearching">Reset</button>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="text-left datatable-length">
                  <span>Show
                  <select class="form-control" v-model="params.length" v-on:change="handleSearchingForm">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                  </select> 
                  entries</span>
                </div>
              </div>
            </div>
            <br>
            <!-- /input-group -->
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <v2-table border 
                      :data="list"
                      :loading="loading"
                      :total="total"
                      :shown-pagination="true"
                      :pagination-info="paginationInfo"
                      :lazy-load="true"
                      @page-change="handlePageChange"
                      @sort-change="handleSortChange"
                      @select-change="handleSelectChange"
                    >
                    <v2-table-column type="selection" width="40"></v2-table-column>
                    <v2-table-column label="Id" prop="id" width="40" ></v2-table-column>
                    <v2-table-column label="Delivery code" width="150" sortable prop="cd"></v2-table-column>
                    <v2-table-column label="Status name" width="150" sortable prop="status_name"></v2-table-column>
                    <v2-table-column label="Order code" width="150" prop="order_code"></v2-table-column>
                    <v2-table-column label="Buyer name" width="200" prop="buyer_name"></v2-table-column>
                    <v2-table-column label="Pickup date" prop="pickup_date"></v2-table-column>
                    <v2-table-column label="Pickup name"  width="150" prop="pickup_name"></v2-table-column>
                    <v2-table-column label="Pickup address"  width="150" prop="pickup_address"></v2-table-column>
                    <v2-table-column label="Type" width="150" prop="delivery_type_name"></v2-table-column>
                    <v2-table-column label="Date" prop="delivery_date"></v2-table-column>
                    </v2-table>
                </div>
                <!-- /.col-lg-12 -->
            </div>

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data () {
    return {
      formatText: '<span>Total record is <strong>{0}</strong>, displaying <strong>{1}</strong> per page</span>',
      currentPage: 1,
      total: 0,
      loading: true,
      paginationInfo: {
        text: ''
      },
      list: [],
      params: {
        length: 10,
        order: '',
        sort: 'asc',
        page: 1,
        order_code: '',
        code: '',
        buyer_name: ''
      }
    }
  },
  created() {
    this.callApi()
  },
  mounted() {
  },
  watch:{
    
  },
  methods: {
    handlePageChange(page) {
      this.callApi()
    },
    handleSortChange({prop, order}) {
      this.params.order = prop == 'status_name' ? 'status' : prop
      this.params.sort = order == 'descending' ? 'desc' : 'asc'
      this.callApi()
    },
    handleSelectChange(row) {
    },
    callApi() {
      this.loading = true
      axios({ method: "GET", "url": process.env.API_DELIVERY + this.encodeQueryData(this.params)})
      .then(result => {
          this.list = result.data.results.rows
          this.total = result.data.results.total_record
          this.currentPage = result.data.results.page
          this.paginationInfo.text = (this.formatText).format(this.total, (result.data.results.rows).length)
          this.paginationInfo.pageSize = result.data.results.length
          this.loading = false
      }, error => {
          this.loading = false
          console.error(error)
      });
    },
    encodeQueryData(data) {
      let ret = []
      for (let d in data) {
        if (data[d] != '') {
          ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
        }
      }
      return ret.length > 0 ? ('?' + ret.join('&')) : ''
    },
    handleSearchingForm() {
      this.paginationInfo.pageSize = this.params.length
      this.callApi()
    },
    resetSearching() {
      this.params.code = ''
      this.params.order_code = ''
      this.params.buyer_name = ''
      this.callApi()
    }
  }
}
</script>

<!--<script src="@/assets/bootstrap/js/bootstrap.min.js"></script>
<script src="@/assets/metisMenu/metisMenu.min.js"></script>-->

<!-- Bootstrap Core CSS -->
<style src="@/assets/bootstrap/css/bootstrap.min.css"></style>
<style src="@/assets/css/custom.css"></style>
<style src="@/assets/bootstrap/css/bootstrap.min.css"></style>
<style src="@/assets/metisMenu/metisMenu.min.css"></style>
<style src="@/assets/dist/css/sb-admin-2.css"></style>
<style src="@/assets/font-awesome/css/font-awesome.min.css"></style>
