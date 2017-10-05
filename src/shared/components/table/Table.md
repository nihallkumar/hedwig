## Table - WORK IN PROGRESS

```html
<div class="hw-table">
  <table data-hw-table="tablename" >
    <thead>
      <tr>
       <!--When a header is clicked, run the sortTable function, with a parameter, 0 for sorting by names, 1 for sorting by country:-->  
        <th data-hw-sort-default>First name</th>
        <th data-hw-sort-default>Last name</th>
        <th data-hw-sort-default>Age</th>
        <th data-hw-sort-default>Sex</th>
        <th data-hw-sort-default>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Anders</td>
        <td>Eriksen</td>
        <td>24</td>
        <td>Male</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Celine</td>
        <td>Berg</td>
        <td>29</td>
        <td>Male</td>
        <td>Norway</td>
      </tr>
      <tr>
        <td>Åre</td>
        <td>Bugge</td>
        <td>89</td>
        <td>Male</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Helene</td>
        <td>Åse</td>
        <td>53</td>
        <td>Female</td>
        <td>Germany</td>
      </tr>
    </tbody>
  </table>
</div>
```
### Table - fixed header

```html
<div class="hw-table" data-hw-table-height="200">
  <table data-hw-table="tablename" >
    <thead>
      <tr>
       <!--When a header is clicked, run the sortTable function, with a parameter, 0 for sorting by names, 1 for sorting by country:-->  
        <th data-hw-sort-default>First name</th>
        <th data-hw-sort-default>Last name</th>
        <th data-hw-sort-default>Age</th>
        <th data-hw-sort-default>Sex</th>
        <th data-hw-sort-default>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Anders</td>
        <td>Eriksen</td>
        <td>24</td>
        <td>Male</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Celine</td>
        <td>Berg</td>
        <td>29</td>
        <td>Male</td>
        <td>Norway</td>
      </tr>
      <tr>
        <td>Åre</td>
        <td>Bugge</td>
        <td>89</td>
        <td>Male</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Helene</td>
        <td>Åse</td>
        <td>53</td>
        <td>Female</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Guro</td>
        <td>Eilirt</td>
        <td>33</td>
        <td>Female</td>
        <td>Greenland</td>
      </tr>
      <tr>
        <td>Gubben</td>
        <td>Gamlefar</td>
        <td>99</td>
        <td>Male</td>
        <td>Skohornet</td>
      </tr>
    </tbody>
  </table>
</div>
```