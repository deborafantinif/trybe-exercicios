SELECT 
    job_id, AVG(salary)
FROM
    hr.employees
GROUP BY job_id
HAVING job_id != 'IT_PROG'
ORDER BY AVG(salary) DESC;