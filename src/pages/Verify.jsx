import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

export default function Verify() {
  const navigate = useNavigate()
  const savedEmail = localStorage.getItem('pending-auth-email') || 'alex@context.app'
  const [code, setCode] = useState(['', '', '', ''])

  const updateCode = (index, value) => {
    const nextValue = value.replace(/\D/g, '').slice(-1)

    setCode((current) => current.map((item, itemIndex) => (itemIndex === index ? nextValue : item)))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('is-authenticated', 'true')
    navigate('/dashboard')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Verify account</CardTitle>
          <CardDescription>
            Enter the 4-digit code sent to {savedEmail}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label>Verification code</Label>
              <div className="grid grid-cols-4 gap-2">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    className="text-center text-base"
                    inputMode="numeric"
                    maxLength={1}
                    placeholder="0"
                    value={digit}
                    onChange={(event) => updateCode(index, event.target.value)}
                    required
                  />
                ))}
              </div>
            </div>
            <Button className="w-full" type="submit">
              Verify
            </Button>
            <div className="flex items-center justify-between text-sm">
              <button className="text-muted-foreground underline" type="button">
                Resend code
              </button>
              <Link className="underline" to="/">
                Back to login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
