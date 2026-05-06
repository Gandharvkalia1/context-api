import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function Profile() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Protected route placeholder.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/dashboard">
            <Button>Back to dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}
