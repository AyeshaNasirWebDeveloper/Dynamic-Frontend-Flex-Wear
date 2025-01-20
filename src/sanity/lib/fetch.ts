import {createClient} from 'next-sanity'

const client = createClient({
    projectId: "s2udezx6",
    dataset: "production",
    useCdn : true,
    apiVersion: "2021-08-31"

})

export async function sanityFetch({query, params = {}}: {query : string, params? : any }) {
    return await client.fetch(query, params)
}