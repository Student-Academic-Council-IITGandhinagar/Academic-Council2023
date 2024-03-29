import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../styles/Internship.css';

const IndustryData = () => {
  const SPREADSHEET_ID = '2PACX-1vSSxA8ggJBzCCln_cYZKwkMBbciU7OjD1E2WKxv2T0gHxCekdV4AYgthP-b6d_8wPTJmsMwBq4v8XHI';
  const CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1416329306&single=true&output=csv`;

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CSV_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const csvData = await response.text();

        // Use PapaParse to parse CSV data
        Papa.parse(csvData, {
          header: false,
          skipEmptyLines: true,
          complete: (result) => {
            const headers = result.data[1];
            const rowData = result.data.slice(2);

            const formattedData = rowData.map((row) => {
              return headers.reduce((acc, header, index) => {
                acc[header] = row[index];
                return acc;
              }, {});
            });

            setData(formattedData);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [CSV_URL]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderTable = () => {
    if (data.length === 0) {
      return null;
    }

    const headers = Object.keys(data[0]);

    // Filter data based on the search query
    const filteredData = data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, index) => (
                  <td key={index}>
                    {header.includes('Link') ? (
                      <a
                        href={row[header]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          maxWidth: '2px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {header}
                      </a>
                    ) : (
                      row[header]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {/* <h1>Google Sheets Data</h1> */}
      <div className="table-container">{renderTable()}</div>
    </div>
  );
};

export default IndustryData;


/*import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../App.css';

const IndustryData = () => {
  const SPREADSHEET_ID = '2PACX-1vSSxA8ggJBzCCln_cYZKwkMBbciU7OjD1E2WKxv2T0gHxCekdV4AYgthP-b6d_8wPTJmsMwBq4v8XHI';
  const CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1416329306&single=true&output=csv`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CSV_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const csvData = await response.text();

        // Use PapaParse to parse CSV data
        Papa.parse(csvData, {
          header: false,
          skipEmptyLines: true,
          complete: (result) => {
            const headers = result.data[1];
            const rowData = result.data.slice(2);

            const formattedData = rowData.map((row) => {
              return headers.reduce((acc, header, index) => {
                acc[header] = row[index];
                return acc;
              }, {});
            });

            setData(formattedData);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [CSV_URL]);

  const renderTable = () => {
    if (data.length === 0) {
      return null;
    }

    const headers = Object.keys(data[0]);

    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, index) => (
                <td key={index}>
                  {header.includes('Link') ? (
                    <a
                      href={row[header]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ maxWidth: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                      {row[header]}
                    </a>
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Google Sheets Data</h1>
      <div className="table-container">{renderTable()}</div>
    </div>
  );
};

export default IndustryData;

*/